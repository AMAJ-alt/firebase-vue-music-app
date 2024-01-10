<template>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="col-span-1">
                <AppUpload ref="upload" :addSong="addSong"/>
            </div>
            <div class="col-span-2">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">My Songs</span>
                        <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
                    </div>
                    <div class="p-6">
                        <AppCompositionItem
                        v-for="(song, i) in songs"
                        :key="song.docID"
                        :song="song"
                        :updateSong="updateSong"
                        :index="i"
                        :removeSong="removeSong"
                        :updateUnsavedFlag="updateUnsavedFlag"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppUpload from '@/components/AppUpload.vue';
import AppCompositionItem from '@/components/CompositionItem.vue';
import { songsCollection, auth } from '@/includes/firebase';

export default {
  name: 'ManageView',
  components: {
    AppUpload,
    AppCompositionItem,
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  async created() {
    const sanpshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get();
    sanpshot.forEach(this.addSong);
  },
  methods: {
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name;
      this.songs[i].genre = values.genre;
    },
    removeSong(i) {
      this.songs.splice(i, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      // eslint-disable-next-line no-restricted-globals
      const leave = confirm('you have unsaved changes are you sure you awnt to leave? ');
      next(leave);
    }
  },
//   beforeRouteLeave(to, from, next) {
//     this.$refs.upload.cancelUploads();
//     next();
//   },
//   beforeRouteEnter(to, from, next) {
//     console.log('is user logged in ?', store.state.userLoggedIn);
//     if (store.state.userLoggedIn) {
//       next();
//     } else {
//       next({ name: '404' });
//     }
//   },
};
</script>
