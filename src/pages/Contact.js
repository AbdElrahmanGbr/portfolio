import {useFormik} from 'formik';

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = "This field is required";
            }
            if (!values.email) {
                errors.email = "This field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Please use a valid email address';
            }
            if (!values.message) {
                errors.message = "This field is required";
            }
            return errors;
        },
        onSubmit: (values, {setSubmitting}) => {
            console.log("submit", values);
            setSubmitting(false);
            formik.resetForm({values: ''});
        }
    });

    console.log(formik)

    return (
        <main>
            <section>
                <div className="border"></div>
                <div className="flex flex-col justify-between tablet:flex-row my-12">
                    <h1 className="middle-title w-full tablet:w-1/3 tablet:mb-0 mb-5">Get in Touch</h1>
                    <div className="infos-content w-full tablet:w-2/3">
                        <p className="small-text mb-6">
                            I’d love to hear about what you’re working on and how I could help. I’m currently looking
                            for a new role and am open to a wide range of opportunities. My preference would be to find
                            a position in a company in London. But I’m also happy to hear about opportunites that don’t
                            fit that description. I’m a hard-working and positive person who will always approach each
                            task with a sense of purpose and attention to detail. Please do feel free to check out my
                            online profiles below and get in touch using the form.
                        </p>
                        <div className={'fill-blue-magenta flex space-x-3'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
            </section>
            <section className="contact">
                <div className="flex flex-col justify-between tablet:flex-row my-12">
                    <h2 className="middle-title w-full tablet:w-1/3 tablet:mb-0 mb-5">Contact Me</h2>
                    <form className="contact-form w-full tablet:w-2/3" onSubmit={formik.handleSubmit}>
                        <div className="contact-form-input">
                            <label className="contact-form-label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                className={`${formik.touched.name && formik.errors.name ? "input-error" : ""}`}
                                placeholder="Hlbessa Hambozo"
                                {...formik.getFieldProps("name")}
                            />
                            {formik.touched.name && formik.errors.name &&
                                <p className="contact-form-error">{formik.errors.name}</p>}
                        </div>
                        <div className="contact-form-input">
                            <label className="contact-form-label" htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                className={`${formik.touched.email && formik.errors.email ? "input-error" : ""}`}
                                placeholder="email@example.com"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <p className="contact-form-error">{formik.errors.email}</p>}
                        </div>
                        <div className="contact-form-area">
                            <label className="contact-form-label" htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                className={`${formik.touched.message && formik.errors.message ? "area-error" : ""}`}
                                placeholder="How can I help?" {...formik.getFieldProps("message")}
                                rows={3}
                            />
                            {formik.touched.message && formik.errors.message &&
                                <p className="contact-form-error">{formik.errors.message}</p>}
                        </div>
                        <button
                            className="button button-form"
                            disabled={!(formik.isValid && formik.dirty)}
                            type="submit"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contact;