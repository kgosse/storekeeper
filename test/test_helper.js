import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';

function setupFakeDOM() {
    global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
    global.window = document.defaultView;
    global.navigator = { userAgent: "node.js" };
}

function renderShallow(component) {
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

export { renderShallow, setupFakeDOM };
