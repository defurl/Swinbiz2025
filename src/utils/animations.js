import { gsap } from 'gsap';

// Define animation presets for consistent use across the application
export const animations = {
  // Fade animations
  fadeIn: (element, duration = 0.5, delay = 0) => {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },
  
  fadeOut: (element, duration = 0.5, delay = 0) => {
    return gsap.to(element, { 
      opacity: 0, 
      duration, 
      delay, 
      ease: 'power2.in' 
    });
  },
  
  // Slide animations
  slideInRight: (element, duration = 0.5, delay = 0, distance = 50) => {
    return gsap.fromTo(
      element,
      { x: distance, opacity: 0 },
      { x: 0, opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },
  
  slideInLeft: (element, duration = 0.5, delay = 0, distance = 50) => {
    return gsap.fromTo(
      element,
      { x: -distance, opacity: 0 },
      { x: 0, opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },
  
  slideInUp: (element, duration = 0.5, delay = 0, distance = 50) => {
    return gsap.fromTo(
      element,
      { y: distance, opacity: 0 },
      { y: 0, opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },
  
  slideInDown: (element, duration = 0.5, delay = 0, distance = 50) => {
    return gsap.fromTo(
      element,
      { y: -distance, opacity: 0 },
      { y: 0, opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },
  
  // Scale animations
  popIn: (element, duration = 0.5, delay = 0) => {
    return gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
    );
  },
  
  // Stagger animations for lists
  staggerFadeIn: (elements, duration = 0.5, stagger = 0.1) => {
    return gsap.fromTo(
      elements,
      { opacity: 0 },
      { opacity: 1, duration, stagger, ease: 'power2.out' }
    );
  },
  
  staggerSlideInRight: (elements, duration = 0.5, stagger = 0.1, distance = 30) => {
    return gsap.fromTo(
      elements,
      { x: distance, opacity: 0 },
      { x: 0, opacity: 1, duration, stagger, ease: 'power2.out' }
    );
  },
  
  // Button hover effect
  buttonHover: (element) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: 1.05, duration: 0.2, ease: 'power1.out' });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.2, ease: 'power1.in' });
    });
  },
  
  // Pulse animation for highlighting elements
  pulse: (element, scale = 1.05, duration = 0.5) => {
    return gsap.timeline({ repeat: 1, yoyo: true })
      .to(element, { scale, duration, ease: 'power1.inOut' });
  }
};

// Custom Vue directive for animations
export const animationDirectives = {
  install(app) {
    // v-animate directive for applying animations on element mount
    app.directive('animate', {
      mounted(el, binding) {
        const animationType = binding.value.animation || 'fadeIn';
        const duration = binding.value.duration || 0.5;
        const delay = binding.value.delay || 0;
        const distance = binding.value.distance || 50;
        
        switch(animationType) {
          case 'fadeIn':
            animations.fadeIn(el, duration, delay);
            break;
          case 'slideInRight':
            animations.slideInRight(el, duration, delay, distance);
            break;
          case 'slideInLeft':
            animations.slideInLeft(el, duration, delay, distance);
            break;
          case 'slideInUp':
            animations.slideInUp(el, duration, delay, distance);
            break;
          case 'slideInDown':
            animations.slideInDown(el, duration, delay, distance);
            break;
          case 'popIn':
            animations.popIn(el, duration, delay);
            break;
          default:
            animations.fadeIn(el, duration, delay);
        }
      }
    });
    
    // v-button-hover directive for interactive button hover effects
    app.directive('button-hover', {
      mounted(el) {
        animations.buttonHover(el);
      }
    });
  }
};

// Vue transition component configurations
export const transitionPresets = {
  fade: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'opacity-0',
    enterToClass: 'opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0'
  },
  slideRight: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform -translate-x-5 opacity-0',
    enterToClass: 'transform translate-x-0 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform translate-x-0 opacity-100',
    leaveToClass: 'transform translate-x-5 opacity-0'
  },
  slideLeft: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform translate-x-5 opacity-0',
    enterToClass: 'transform translate-x-0 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform translate-x-0 opacity-100',
    leaveToClass: 'transform -translate-x-5 opacity-0'
  },
  slideDown: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform -translate-y-5 opacity-0',
    enterToClass: 'transform translate-y-0 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform translate-y-0 opacity-100',
    leaveToClass: 'transform -translate-y-5 opacity-0'
  },
  slideUp: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform translate-y-5 opacity-0',
    enterToClass: 'transform translate-y-0 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform translate-y-0 opacity-100',
    leaveToClass: 'transform translate-y-5 opacity-0'
  },
  scale: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0'
  }
};

// Scroll animation helper using Intersection Observer
export const createScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    animation = 'fadeIn',
    duration = 0.5,
    rootMargin = '0px'
  } = options;
  
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        switch(animation) {
          case 'fadeIn':
            animations.fadeIn(el, duration);
            break;
          case 'slideInRight':
            animations.slideInRight(el, duration);
            break;
          case 'slideInLeft':
            animations.slideInLeft(el, duration);
            break;
          case 'slideInUp':
            animations.slideInUp(el, duration);
            break;
          case 'slideInDown':
            animations.slideInDown(el, duration);
            break;
          case 'popIn':
            animations.popIn(el, duration);
            break;
          default:
            animations.fadeIn(el, duration);
        }
        
        // Unobserve after animating to avoid repeats
        observer.unobserve(el);
      }
    });
  }, { threshold, rootMargin });
};

export default {
  animations,
  animationDirectives,
  transitionPresets,
  createScrollAnimation
};