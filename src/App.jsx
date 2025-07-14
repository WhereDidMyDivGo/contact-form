import "./App.css";

function App() {
  return (
    <>
      <main>
        <form action="">
          <div className="form-container">
            <h1 className="title">Contact Us</h1>

            <div className="grouped-input">
              <div className="input-div">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" className="form-input" />
              </div>

              <div className="input-div">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" className="form-input" />
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-input" />
            </div>

            <div className="input-div">
              <label>Query Type</label>
              <div className="grouped-input">
                <div className="radio-input-div">
                  <label className="radio">
                    <input type="radio" name="queryType" value="general" className="form-radio" />
                    <span class="custom"></span>
                  </label>
                  <p>General Enquiry</p>
                </div>

                <div className="radio-input-div">
                  <label className="radio">
                    <input type="radio" name="queryType" value="support" className="form-radio" />
                    <span class="custom"></span>
                  </label>
                  <p>Support Request</p>
                </div>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-input"></textarea>
            </div>
          </div>

          <div className="consent-div">
            <label>
              <input type="checkbox" required className="form-checkbox" />
            </label>
            <p>I consent to being contacted by the team *</p>
          </div>

          <button type="submit" className="submit-button">
            <p>Submit</p>
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
