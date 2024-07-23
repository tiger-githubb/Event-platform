import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { checkoutOrder } from "@/lib/actions/order.actions";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Commande passée!Vous recevrez une confirmation par e-mail.");
    }

    if (query.get("canceled")) {
      console.log("Commandez annulé - Continuez à faire le tour et à vérifier lorsque vous êtes prêt.");
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Obtenir un billet" : "Acheter un billet"}
      </Button>
    </form>
  );
};

export default Checkout;
