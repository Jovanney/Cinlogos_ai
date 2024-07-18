import { create } from "zustand";

interface CompanyState {
  Name: string;
  Slogan: string | undefined;
  Industry: string;
  IndustryOther: string;
  Attributes: string[];
  setName: (name: string) => void;
  setSlogan: (name: string) => void;
  setIndustry: (industry: string) => void;
  setIndustryOther: (industryOther: string) => void;
  setAttributes: (attribute: string) => void;
  resetCompanyStore: () => void;
}

const initialState = {
  Name: "",
  Slogan: undefined,
  Industry: "",
  IndustryOther: "",
  Attributes: [],
};

export const useCompanyStore = create<CompanyState>((set) => ({
  ...initialState,
  setName: (name) => set({ Name: name }),
  setSlogan: (slogan) => set({ Slogan: slogan }),
  setIndustry: (industry) => set({ Industry: industry }),
  setIndustryOther: (industryOther) => set({ IndustryOther: industryOther }),
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
