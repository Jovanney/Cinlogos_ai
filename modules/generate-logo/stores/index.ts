import { create } from "zustand";

interface CompanyState {
  Name: string;
  Slogan: string | undefined;
  Segment: string;
  SegmentOther: string;
  Attributes: string[];
  setName: (name: string) => void;
  setSlogan: (name: string) => void;
  setSegment: (segment: string) => void;
  setSegmentOther: (segmentOther: string) => void;
  setAttributes: (attribute: string) => void;
  resetCompanyStore: () => void;
}

const initialState = {
  Name: "",
  Slogan: undefined,
  Segment: "",
  SegmentOther: "",
  Attributes: [],
};

export const useCompanyStore = create<CompanyState>((set) => ({
  ...initialState,
  setName: (name) => set({ Name: name }),
  setSlogan: (slogan) => set({ Slogan: slogan }),
  setSegment: (segment) => set({ Segment: segment }),
  setSegmentOther: (segmentOther) => set({ SegmentOther: segmentOther }),
  setAttributes: (attribute) => {
    set((state) => ({
      Attributes: state.Attributes.includes(attribute)
        ? state.Attributes.filter((item) => item !== attribute)
        : [...state.Attributes, attribute],
    }));
  },
  resetCompanyStore: () => {
    set(initialState);
  },
}));
