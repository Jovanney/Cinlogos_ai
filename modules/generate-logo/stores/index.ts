import { create } from "zustand";

interface CompanyState {
  Name: string;
  Slogan: string | undefined;
  Industry: string;
  IndustryOther: string;
  Attributes: string[];
  styleOfMusic: string[];
  tags: string;
  setName: (name: string) => void;
  setSlogan: (name: string) => void;
  setIndustry: (industry: string) => void;
  setIndustryOther: (industryOther: string) => void;
  setStyleOfMusic: (styleOfMusic: string) => void;
  setAttributes: (attribute: string) => void;
  setTags: (tags: string) => void;
  resetCompanyStore: () => void;
}

const initialState = {
  Name: "",
  Slogan: undefined,
  Industry: "",
  IndustryOther: "",
  Attributes: [],
  styleOfMusic: [],
  tags: "",
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
  setStyleOfMusic: (styleOfMusic) => {
    set((state) => ({
      styleOfMusic: state.styleOfMusic.includes(styleOfMusic)
        ? state.styleOfMusic.filter((item) => item !== styleOfMusic)
        : [...state.styleOfMusic, styleOfMusic],
    }));
  },
  setTags: (tags) => set({ tags }),
  resetCompanyStore: () => {
    set(initialState);
  },
}));
