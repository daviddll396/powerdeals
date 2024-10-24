import "./faqs.css";
import Accordion from "../reusables/Accordion/Accordion";

const Faqs = () => {
  return (
    <div className="section-container">
      <div className="faq-header">
        Let us answer your <span className="orangetext">questions!</span>
      </div>
      <div className="faq-accordions">
        <Accordion
          header="How do I purchase electricity tokens?"
          text="Log in to your account, select your electricity provider, enter your meter number and the amount you wish to purchase, and complete the payment. Your token will be delivered instantly."
        />
        <Accordion
          header='How does the "Pay for Me" feature work?'
          text="You can share a secure payment link or your account details with someone else, allowing them to pay for your electricity on your behalf."
        />
        <Accordion
          header="What is the Virtual Account Payment feature?"
          text="With Virtual Account Payment, you can transfer money into a provided virtual account, and the platform will automatically purchase and send an electricity token to you."
        />
        <Accordion
          header="Can I manage multiple meters with one account?"
          text="Yes, you can add and manage multiple meters under a single account, making it easy to keep track of electricity usage for multiple properties or businesses."
        />
        <Accordion
          header="What happens if my transaction fails?"
          text="If your transaction fails, the system will automatically reverse your funds within a specified period. If the reversal does not occur, please contact customer support."
        />
        <Accordion
          header="Is my payment information secure?"
          text="Absolutely. We use advanced encryption and security protocols to protect your payment information."
        />
        <Accordion
          header="What payment methods can I use?"
          text="You can pay using bank transfers, debit/credit cards, USSD, and other supported payment methods."
        />
        <Accordion
          header="How quickly will I receive my electricity token?"
          text="Tokens are usually delivered instantly after your payment is successful. Occasionally, there might be a short delay due to network issues."
        />
        <Accordion
          header="Can I view my previous transactions?"
          text="Yes, you can access your transaction history by logging into your account and visiting the 'Transaction History' section."
        />
        <Accordion
          header="What should I do if I encounter an error?"
          text="If you encounter an error, refer to the error message for guidance or contact our 24/7 customer support team for assistance."
        />
      </div>
    </div>
  );
};

export default Faqs;
