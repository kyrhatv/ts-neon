import React, {  FunctionComponent } from 'react';
import { useAudio } from 'react-use';
import { ProgressBar, Button, Form, Col, Row } from 'react-bootstrap';

export interface SpeechProps {
    url:
        | string
        | 'https://ia800804.us.archive.org/32/items/NeverGonnaHitThoseNotes/Never%20Gonna%20Hit%20Those%20Notes.mp3';
}

const AudioPlayer: FunctionComponent<SpeechProps> = ({ url }) => {

    const [audio, state, controls] = useAudio({
        src: 'https://ia800804.us.archive.org/32/items/NeverGonnaHitThoseNotes/Never%20Gonna%20Hit%20Those%20Notes.mp3',
        autoPlay: true
    });

    return (
        <>
            <Row>
                <Col md={3}>
                    <Button onClick={controls.pause}>Pause</Button>
                    <Button onClick={controls.play}>Play</Button>
                </Col>
                <Col md={3}>
                    <Button onClick={controls.unmute}>unmute</Button>
                    <Button onClick={controls.mute}>Mute</Button>
                </Col>
                <Col md={3}>
                    <Form>
                        <Form.Control
                            type="range"
                            min={0}
                            max={100}
                            onChange={(e: any) => controls.volume(Number(e.target.value) / 100)}
                        />
                    </Form>
                </Col>
            </Row>
            {audio}
            <ProgressBar
                animated
                now={(state.time / state.duration) * 100}
                label={`${state.time} / ${state.duration}`}
            />
        </>
    );
};

export default AudioPlayer;
