import InputText from 'components/atoms/InputText';

const SignUpFormComponent = () => (
  <>
    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
    <p className="text-lg color-palette-1 m-0">
      Daftar dan bergabung dengan kami
    </p>
    <div className="pt-50">
      <InputText type="text" label="Full Name" name="fullname" placeholder="Enter your full name" />
    </div>
    <div className="pt-30">
      <InputText type="email" label="Email Address" name="email" placeholder="Enter your email address" />
    </div>
    <div className="pt-30">
      <InputText type="password" label="Password" name="password" placeholder="Enter your password" />
    </div>
    <div className="button-group d-flex flex-column mx-auto pt-50">
      <a
        className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
        href="../src/sign-up-photo.html"
        role="button"
      >
        Continue
      </a>
      <a
        className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
        href="../src/sign-in.html"
        role="button"
      >
        Sign In
      </a>
    </div>
  </>
);

export default SignUpFormComponent;
