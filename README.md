# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7e22089b-e34e-49ef-ad12-73c70903571e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7e22089b-e34e-49ef-ad12-73c70903571e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Recent Changes

- 3D live preview functionality has been removed. The configurator now uses a static summary panel without WebGL. Dependencies `three`, `@react-three/fiber`, and `@react-three/drei` have been removed.

### Catalog Cleanup
- Removed materials: "Biodegradable" and "Fully printed" from `materialOptions`.
- Removed temporary banner about rim style selection from `Customize` page.
- Updated copy to remove rim style references across `Newsletter`, `StyleQuiz`, `ReturnPolicy`, and `HowItWorks`.
- Deleted unused `StepRimStyle` component.

### Migration Notes
- If you previously relied on 3D preview, update any external docs or flows to reference the static price summary in `src/pages/Customize.tsx`.
- Run `npm install` after pulling changes to reflect removed dependencies.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7e22089b-e34e-49ef-ad12-73c70903571e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
