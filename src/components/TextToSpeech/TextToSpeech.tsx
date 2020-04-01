import React, { FunctionComponent } from 'react';
import { useSpeech } from 'react-use';

export interface TTSProps {
    text: string;
    rate?: number;
    pitch?: number;
}

const TextToSpeech: FunctionComponent<TTSProps> = ({ text, rate = 0.8, pitch = 0.5 }) => {
    const voices = window.speechSynthesis.getVoices();

    const state = useSpeech(text, { rate: rate, pitch: pitch, voice: voices[0] });
    return <div hidden>{JSON.stringify(state, null, 2)}</div>;
};

export default TextToSpeech;
