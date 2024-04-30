import { Mic, Webcam } from "lucide-react";

export default function PermissionPrompt() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <Webcam size={40} />
        <Mic size={40} />
      </div>
      <p>Please allow access to mic and cam to join call!</p>
    </div>
  );
}
