export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-xl`;

    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    if (binding.value.right) {
      iconClass += ' float-right';
    }
    // eslint-disable-next-line
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
