// Accessibility utility functions
export const useFocusTrap = () => {
  const focusTrapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!focusTrapRef.current) return;

    const focusableElements = focusTrapRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    focusTrapRef.current.addEventListener('keydown', handleKeyDown);

    return () => {
      focusTrapRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return focusTrapRef;
};

// ARIA attributes configuration
export const ariaAttributes = {
  live: {
    polite: 'polite',
    assertive: 'assertive',
    off: 'off',
  },
  roles: {
    button: 'button',
    link: 'link',
    dialog: 'dialog',
    alert: 'alert',
    navigation: 'navigation',
    main: 'main',
    contentInfo: 'contentinfo',
  },
  states: {
    expanded: 'expanded',
    collapsed: 'collapsed',
    hidden: 'hidden',
    busy: 'busy',
  },
};

// Accessibility utilities
export const useA11y = () => {
  const announce = (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      liveRegion.setAttribute('aria-live', politeness);
    }
  };

  const focusElement = (element: HTMLElement) => {
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return {
    announce,
    focusElement,
  };
};

// Accessibility styles
export const a11yStyles = {
  visuallyHidden: `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
  focusOutline: `
    &:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
  `,
};
