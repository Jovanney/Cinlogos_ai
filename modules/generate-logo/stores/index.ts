import { z } from "zod";
import { create } from "zustand";
import { CompanyFormSchema } from "../components/forms/company-form";

interface CompanyState {
  Name: string;
  Segment: string;
  SegmentOther: string;
  Attributes: string[];
  setName: (name: string) => void;
  setSegment: (segment: string) => void;
  setSegmentOther: (segmentOther: string) => void;
  setAttributes: (attributes: string[]) => void;
  reset: () => void;
}

const INITIAL_STATE = {
  Name: "",
  Segment: "",
  SegmentOther: "",
  Attributes: [],
};

export const useCompanyStore = create<CompanyState>((set) => ({
  Name: "",
  Segment: "",
  SegmentOther: "",
  Attributes: [],
  setName: (name) => set({ Name: name }),
  setSegment: (segment) => set({ Segment: segment }),
  setSegmentOther: (segmentOther) => set({ SegmentOther: segmentOther }),
  setAttributes: (attributes) => set({ Attributes: attributes }),
  reset: () => set(INITIAL_STATE),
}));
