import { create } from "zustand";

interface CompanyState {
  Name: string;
  Slogan: string | undefined;
  Industry: string;
  IndustryOther: string;
  Attributes: string[];
  AttributesOther: string;
  styleOfMusic: string[];
  styleOfMusicOther: string;
  tags: string;
  setName: (name: string) => void;
  setSlogan: (name: string) => void;
  setIndustry: (industry: string) => void;
  setIndustryOther: (industryOther: string) => void;
  setStyleOfMusic: (styleOfMusic: string) => void;
  setAttributes: (attribute: string) => void;
  setAttributesOther: (attribute: string) => void;
  setStyleOfMusicOther: (styleOfMusic: string) => void;
  setTags: (tags: string) => void;
  resetCompanyStore: () => void;
}

const initialState = {
  Name: "",
  Slogan: undefined,
  Industry: "",
  IndustryOther: "",
  Attributes: [],
  AttributesOther: "",
  styleOfMusic: [],
  styleOfMusicOther: "",
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
  setAttributesOther: (attribute) => set({ AttributesOther: attribute }),
  setStyleOfMusic: (styleOfMusic) => {
    set((state) => ({
      styleOfMusic: state.styleOfMusic.includes(styleOfMusic)
        ? state.styleOfMusic.filter((item) => item !== styleOfMusic)
        : [...state.styleOfMusic, styleOfMusic],
    }));
  },
  setStyleOfMusicOther: (styleOfMusic) =>
    set({ styleOfMusicOther: styleOfMusic }),
  setTags: (tags) => set({ tags }),
  resetCompanyStore: () => {
    set(initialState);
  },
}));
