const formatVolumeIconPath = require("../assets/scripts/main");

describe('formatVolumeIconPath', () => {
    test('icon 3', () => {
        expect(formatVolumeIconPath(100)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
    test('icon 2', () => {
        
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('icon 1', () => {
        expect(formatVolumeIconPath(25)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('icon 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});