import shell from 'shelljs'

shell.config.fatal = true

function main(): void {
    const {ANDROID_HOME} = process.env

    if (process.platform === 'win32') {
        shell.exec(`${ANDROID_HOME}/emulator/emulator -avd Pixel_3a_API_28`)
    }
}

main()
