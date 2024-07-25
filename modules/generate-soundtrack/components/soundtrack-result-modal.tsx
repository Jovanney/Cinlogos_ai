import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import React from "react";
import { Button } from "@/components/ui/button";
// import { saveAs } from "file-saver";
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
  const pathname = usePathname();
  console.log("soundUrl:", soundUrl);
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalBody externalOpen={open}>
          <ModalContent className="flex items-end justify-end">
            <AudioPlayer autoPlay src={soundUrl} />
          </ModalContent>
          <ModalFooter className="space-x-2">
            <Link href={`/generate-logo?from=${pathname}`}>
              <Button>Generate logo</Button>
            </Link>
            {/* <Link href={soundUrl}>
              <Button>Listen to the SoundTrack</Button>
            </Link> */}
            {/* <Button className="hover:scale-105" onClick={saveFile}>
              Download
            </Button> */}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
