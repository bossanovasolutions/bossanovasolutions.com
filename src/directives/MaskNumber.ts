const MaskNumber = {
  mounted: (el: HTMLElement, { value }: { value: number }) => {
    const input = el.querySelector('input');
    if (input) {
      input.addEventListener('keydown', (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key == 'v') return;

        if (/Delete|Backspace|Tab|Escape|Arrow.+/.test(e.key)) return;

        if (!/\d/.test(e.key) || (value && input.value.length >= value)) {
          e.preventDefault();
          return false;
        }
      });
    }
  },
};

export default MaskNumber;
