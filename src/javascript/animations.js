const animationPattern = (current, previous) => {
  return `
       ${previous === 'daily' && current === 'weekly' && ' animate-dw-forward'}
            ${
              previous === 'daily' &&
              current === 'monthly' &&
              ' animate-dm-forward'
            }
            ${
              previous === 'weekly' &&
              current === 'daily' &&
              ' animate-dw-backward'
            }
            ${
              previous === 'weekly' &&
              current === 'monthly' &&
              ' animate-wm-forward'
            }
            ${
              previous === 'monthly' &&
              current === 'daily' &&
              ' animate-dm-backward'
            }
            ${
              previous === 'monthly' &&
              current === 'weekly' &&
              ' animate-wm-backward'
            }
  `;
};

export default animationPattern
