import EventForm from "@/components/shared/EventForm";
import User from "@/lib/database/models/user.model";
import { auth } from "@clerk/nextjs";

const CreateEvent = async () => {
  const { sessionClaims } = auth();

  const clerkId = sessionClaims?.sub as string;
  const user = await User.findOne({ clerkId: clerkId });
  const userId = user._id.toString();

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
