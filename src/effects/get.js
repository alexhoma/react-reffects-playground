import { registerEffectHandler, dispatch } from 'reffects';

export default function register() {
  registerEffectHandler('get', function get(requestDescription) {
    const { url, successEvent } = requestDescription;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({
          id: successEvent[0],
          payload: { ...res },
        });
      });
  });
}
