import InputText from 'components/atoms/InputText';

const SignInFormComponent = () => (
  <form>
    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
    <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
    <div className="pt-50">
      <InputText type="email" label="Email Address" name="email" placeholder="Enter your email address" />
    </div>
    <div className="pt-30">
      <InputText type="password" label="Password" name="password" placeholder="Enter your password" />
    </div>
    <div className="button-group d-flex flex-column mx-auto pt-50">
      <a
        className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
        href="../index.html"
        role="button"
      >
        Continue to Sign In
      </a>
      <a
        className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
        href="../src/sign-up.html"
        role="button"
      >
        Sign Up
      </a>
    </div>
  </form>
);

export default SignInFormComponent;
