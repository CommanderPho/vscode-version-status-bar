'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { VersionStatusBarItem } from './statusBar';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "version-status-bar" is now active!');

    // Instantiate and register the new status bar item.
    const selectionStatusBar = new VersionStatusBarItem();
    context.subscriptions.push(selectionStatusBar);

    let disposable = vscode.commands.registerCommand('extension.printVersionInfo', () => {
        // Get VSCode version
        const vsCodeVersion = vscode.version;
        
        // Get current extension version
        const currentExtension = vscode.extensions.getExtension('phohale.version-status-bar');
        const extensionVersion = currentExtension ? currentExtension.packageJSON.version : 'unknown';
        
        // Get all extensions information
        const extensionsInfo = vscode.extensions.all.map(ext => {
            return `${ext.packageJSON.displayName || ext.id}: v${ext.packageJSON.version}`;
        }).join('\n');
        
        // Create version info message
        const versionInfo = 
            `VSCode: v${vsCodeVersion}\n` +
            `version-status-bar: v${extensionVersion}\n\n` +
            `Installed Extensions:\n${extensionsInfo}`;
        
        // Show info in output channel for better readability with scrolling
        const outputChannel = vscode.window.createOutputChannel('Version Information');
        outputChannel.clear();
        outputChannel.appendLine(versionInfo);
        outputChannel.show();
        
        // Show summary in notification
        vscode.window.showInformationMessage(`VSCode v${vsCodeVersion} with ${vscode.extensions.all.length} extensions`);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}