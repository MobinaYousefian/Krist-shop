import {create} from 'zustand'

type State = {
    imageUrl: string
};

type Actions = {
    setImageUrl: (newUrl : string) => void
};

export const useHeroAnimationStore = create<State & Actions>((set) => ({
    imageUrl: "/hero-girl.png",
    setImageUrl: (newUrl) => {
        set({
            imageUrl: newUrl
        })
    }
}));
