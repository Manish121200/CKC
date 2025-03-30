const NewsletterSubscription = () => {
  return (
    <div className="newsletter-container">
      <h1>Newsletter Subscription</h1>
      <p>
        We are going to provide subscriptions for some special places and
        hotels/restaurants that are not easily found but are incredibly beautiful
        and comfortable. Subscribe now to stay updated!
      </p>
      <form id="newsletterForm" className="newsletter-form">
        <label htmlFor="mail">Email:</label>
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
