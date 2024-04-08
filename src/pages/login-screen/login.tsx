import {useRef, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../../components/hooks/reduxIndex';
import { loginAction } from '../../components/store/api-actions';
import { AppRoutes } from '../../components/const/const';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  return (
    <div className="page page--gray page--login">


      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">
              Sign in
            </h1>
            <form
              action="#"
              className="login__form form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  E-mail
                </label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <button
                onClick={() => navigate(AppRoutes.Main)}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>

            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a
                className="locations__item-link"
                href="#"
              >
                <span>
                  Amsterdam
                </span>

              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

