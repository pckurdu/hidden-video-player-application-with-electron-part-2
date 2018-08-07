const {app,BrowserWindow,Menu,dialog}=require('electron')//Menu and dialog modules upload

const exec=require('child_process').exec
const fs = require('fs')//I will use file system to upload video

let filename = 'D:\\electron\\hiddenVideoPlayer-part2\\bats\\names'//

const path=require('path')
const url=require('url')

let win 

const template = [
    {
        label:"Upload Video",
        click () {
            dialog.showOpenDialog(
                { filters: [

                    { name: 'video', extensions: ['mp4','webM','ogg'] }
                
                ]},function (fileNames) {
                    

                    const bat=exec('cmd /c move.bat '+'"'+fileNames[0]+'"',{cwd:"D:\\electron\\hiddenVideoPlayer-part2\\bats"},function(){
            
                    });

                    let[a,s,d,f,r,name]=fileNames[0].split('\\');
                    fs.appendFile(filename, "D:\\electron\\hiddenVideoPlayer-part2\\bats\\ElectronDosyalar\\"+name + ','+name+'\n')
                    
                    win.reload()
            }); 
            
        }
    }
]


const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)



function createWindow() {
    
    win =new BrowserWindow({width:1000,height:800})

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }))  

    win.openDevTools();// Developer Tool

    const bat=exec('cmd /c electron.bat 123456',{cwd:"D:\\electron\\hiddenVideoPlayer-part2\\bats"},function(){
            
    });

}

app.on('ready',createWindow)

app.on('before-quit', () => {
    const bat=exec('cmd /c electron.bat e',{cwd:"D:\\electron\\hiddenVideoPlayer-part2\\bats"},function(){
            
    });
    app.quit()
})

app.on('closed', () => {
    const bat=exec('cmd /c electron.bat e',{cwd:"D:\\electron\\hiddenVideoPlayer-part2\\bats"},function(){
            
    });
    app.quit()
})