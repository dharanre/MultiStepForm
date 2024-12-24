import create from "zustand";

export const useFormStore = create((set) => ({
  formData: {},
  updateFormData: (data) => set({ formData: data }),
}));
