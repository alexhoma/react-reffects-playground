import { registerEffectHandler } from 'reffects';

export default function register(store) {
  registerEffectHandler('mutate', function mutate(mutations) {
    mutations.forEach(function(mutation) {
      store.setState(mutation);
    });
  });
}
