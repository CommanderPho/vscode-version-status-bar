import * as vscode from 'vscode';

export class VersionStatusBarItem {
    private statusBarItem: vscode.StatusBarItem;
    private disposables: vscode.Disposable[] = [];

    constructor() {
        this.statusBarItem = vscode.window.createStatusBarItem(
            vscode.StatusBarAlignment.Right,
            100
        );
        this.registerEventListeners();
        this.update();
        this.statusBarItem.show();
    }

    private registerEventListeners() {
        // Update whenever configuration changes
        this.disposables.push(
            vscode.workspace.onDidChangeConfiguration(e => {
                if (e.affectsConfiguration('versionStatusBar')) {
                    this.update();
                }
            })
        );
        
        // Keep existing event listeners
        this.disposables.push(
            vscode.window.onDidChangeActiveNotebookEditor(() => this.update())
        );
        this.disposables.push(
            vscode.window.onDidChangeNotebookEditorSelection(() => this.update())
        );
    }

    private update() {
        const config = vscode.workspace.getConfiguration('versionStatusBar');
        const extensionsToShow = config.get<string[]>('extensionsToShow', ['phohale.version-status-bar']);
        const showVSCodeVersion = config.get<boolean>('showVSCodeVersion', true);
        
        let versionText = '';
        
        // Add VSCode version if configured
        if (showVSCodeVersion) {
            versionText += `VSCode: ${vscode.version}`;
        }
        
        // Add requested extension versions
        if (extensionsToShow.length > 0) {
            const extensionVersions = extensionsToShow
                .map(extId => {
                    const ext = vscode.extensions.getExtension(extId);
                    if (!ext) return null;
                    return `${ext.packageJSON.displayName || extId.split('.').pop()}: ${ext.packageJSON.version}`;
                })
                .filter(Boolean);
                
            if (extensionVersions.length > 0) {
                if (versionText) versionText += ' | ';
                versionText += extensionVersions.join(' | ');
            }
        }
        
        // Add notebook selection indicator if needed
        const activeNotebookEditor = vscode.window.activeNotebookEditor;
        if (activeNotebookEditor && activeNotebookEditor.selections && activeNotebookEditor.selections.length > 0) {
            const selectedCellIds = activeNotebookEditor.selections.map(range => range.start).join(', ');
            if (versionText) versionText += ' | ';
            versionText += `Selected Cells: ${selectedCellIds}`;
        }
        
        // Update the status bar with an icon and the versions
        this.statusBarItem.text = versionText ? `$(versions) ${versionText}` : '$(versions)';
        this.statusBarItem.tooltip = 'Version Status Bar: Click to see all version info';
        this.statusBarItem.command = 'extension.printVersionInfo';
    }

    public dispose() {
        this.disposables.forEach(d => d.dispose());
        this.statusBarItem.dispose();
    }
}