import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import React from "react";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface SoundtrackResultModalProps {
  open: boolean;
  soundUrl: string;
  companyName: string;
}

export function SoundtrackResultModal({
  open,
  soundUrl,
  companyName,
}: SoundtrackResultModalProps) {
  const saveFile = () => {
    saveAs(soundUrl, `${companyName}.mp3`);
  };
  const pathname = usePathname();
  console.log("soundUrl:", soundUrl);
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalBody externalOpen={open}>
          <ModalContent>
            <div className="flex justify-center w-full">
              <AudioPlayer autoPlay src={soundUrl} />
            </div>
          </ModalContent>
          <ModalFooter className="space-x-2">
            <Link href={`/generate-soundtrack?from=${pathname}`}>
              <Button>Generate SoundTrack</Button>
            </Link>
            <Button className="hover:scale-105" onClick={saveFile}>
              Download
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
