import React from "react";

const Testinomials = () => {
  return (
    <div id="testinomials">
      <h2>Testimonial</h2>
      <section>
        <TestinomialCard
          names={"Sanket"}
          feedback={"Testing Feedback Section"}
        ></TestinomialCard>
        <TestinomialCard
          names={"Sanket"}
          feedback={"Testing Feedback Section"}
        ></TestinomialCard>
      </section>
    </div>
  );
};

const TestinomialCard = ({ names, feedback }) => (
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
    <h4>{names}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testinomials;
