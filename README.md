# Panel Pilot SGD Config Uploader

A configuration uploader tool for Panel Pilot SGD devices.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Release Builds

### Single HTML File

To create a standalone single HTML file that can be opened directly in a browser:

```bash
npm run release:singlefile
```

The output will be in `dist-singlefile/index.html` - a single file that contains all JavaScript and CSS inlined.

### Desktop Application

To create desktop executables for different platforms:

```bash
# Build for current platform
npm run electron:build

# Build for specific platforms
npm run electron:build:win    # Windows portable .exe
npm run electron:build:mac    # macOS .dmg
npm run electron:build:linux  # Linux .AppImage

# Build for all platforms
npm run release:desktop
```

**Note:** Cross-platform builds have the following requirements:
- Building Windows `.exe` on Linux/macOS requires Wine
- Building macOS `.dmg` on Linux/Windows requires additional tools
- For best results, build on the target platform or use CI/CD

The output will be in the `release/` directory:
- `Panel Pilot SGD Config Uploader-x.x.x.AppImage` (Linux)
- `Panel Pilot SGD Config Uploader-x.x.x.exe` (Windows portable)
- `Panel Pilot SGD Config Uploader-x.x.x.dmg` (macOS)