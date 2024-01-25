import React, {useState, useEffect} from "react";
import grapesJS from "grapesjs";
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsPluginForms from 'grapesjs-plugin-forms';
import grapesjsComponentCountdown from 'grapesjs-component-countdown';
import grapesjsPluginExport from 'grapesjs-plugin-export';
import grapesjsTabs from 'grapesjs-tabs';
import grapesjsCustomCode from 'grapesjs-custom-code';
import grapesjsTouch from 'grapesjs-touch';
import grapesjsParserPostcss from 'grapesjs-parser-postcss';
import grapesjsTooltip from 'grapesjs-tooltip';
import grapesjsTuiImageEditor from 'grapesjs-tui-image-editor';
import grapesjsTyped from 'grapesjs-typed';
import grapesjsStyleBg from 'grapesjs-style-bg';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';

function App() {
    const [editor, setEditor] = useState(null)

    useEffect(() => {
        const editor = grapesJS.init({
            container: "#editor",
            plugins: [
                gjsBlocksBasic,
                grapesjsPluginForms,
                grapesjsComponentCountdown,
                grapesjsPluginExport,
                grapesjsTabs,
                grapesjsCustomCode,
                grapesjsTouch,
                grapesjsParserPostcss,
                grapesjsTooltip,
                grapesjsTuiImageEditor,
                grapesjsTyped,
                grapesjsStyleBg,
                grapesjsPresetWebpage,
            ],
            pluginsOpts: {
                gjsBlocksBasic : {},
                grapesjsPluginForms : {},
                grapesjsComponentCountdown : {},
                grapesjsPluginExport : {},
                grapesjsTabs : {},
                grapesjsCustomCode : {},
                grapesjsTouch : {},
                grapesjsParserPostcss : {},
                grapesjsTooltip : {},
                grapesjsTuiImageEditor : {},
                grapesjsTyped : {},
                grapesjsStyleBg : {},
                grapesjsPresetWebpage : {},
            },
        });
        setEditor(editor);
    }, [])
    return (
        <div className="App">
            <div id="editor"></div>
        </div>
    );
}

export default App;
