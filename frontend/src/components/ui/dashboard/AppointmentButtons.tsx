import { UserPlus, UserCog } from "lucide-react";
import Button from "../Button";

export const AppointmentButtons = () => {
  return (
    <div className="flex gap-4 mb-8">
      <Button className="flex items-center" variant="outline">
        <UserPlus className="mr-2 h-4 w-4" />
        New Appointment
      </Button>
      <Button className="flex items-center" variant="outline">
        <UserCog className="mr-2 h-4 w-4" />
        Follow-up Appointment
      </Button>
    </div>
  );
}; 