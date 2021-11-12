import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatusComponent", () => {
    test("status from props should be in state", () => {
    const component = create(<ProfileStatus status = "it-camasutra.com" />);
    const instance = component.getInstance()
    expect(instance.state.status).toBe("it-camasutra.com");
    });

    test("span should be", () => {
        const component = create(<ProfileStatus status = "it-camasutra.com" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
        });
    
    test("input should not be", () => {
        const component = create(<ProfileStatus status = "it-camasutra.com" />);
        const root = component.root;
        expect( () =>{
            const input = root.findByType("input");
        }).toThrow()
        });

        test("component should have right status", () => {
            const component = create(<ProfileStatus status = "it-camasutra.com" />);
            const root = component.root;
            const span = root.findByType("span");
            expect(span.children[0]).toBe("it-camasutra.com");
            });
        
        test("input should replace span after doble click", () => {
            const component = create(<ProfileStatus status = "it-camasutra.com" />);
            const root = component.root;
            const span = root.findByType("span");
            span.props.onDoubleClick();
            const input = root.findByType("input");
            expect(input.props.value).toBe("it-camasutra.com");
            });
        
        test("callback should be called", () => {
            const mockCallback = jest.fn();
            const component = create(<ProfileStatus status = "it-camasutra.com" updateUserStatusThunk = {mockCallback}/>);
            const instance = component.getInstance();
            instance.deactivateEdditMode();
            expect(mockCallback.mock.calls.length).toBe(1);
            });
});