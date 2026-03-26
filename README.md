# Glide Video Tools Showcase
        
build my site glidevideo.com - it acts as a umbrella site for my Glide branded video tools, such as glideconvert, glidelooper, glideblend, and many more to come. glideblend.com is a website, the others are sold on itch.io, msft store and tba other market places. look at glideblend.com and my listings on https://kajdep.itch.io/ to get a feel for the apps. create an overall showcase page, that sells the apps as a coherent collection plus individual pages for each  with links to the sales channels that i can add later, too. plan also a not-yet-published but teased, "GlideStudio" which would be a paid , browser based suite of all the tools combined. make it amazing


Made with Floot.

# Instructions

For security reasons, the `env.json` file is not pre-populated — you will need to generate or retrieve the values yourself.  

For **JWT secrets**, generate a value with:  

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then paste the generated value into the appropriate field.  

For the **Floot Database**, download your database content as a pg_dump from the cog icon in the database view (right pane -> data -> floot data base -> cog icon on the left of the name), upload it to your own PostgreSQL database, and then fill in the connection string value.  

**Note:** Floot OAuth will not work in self-hosted environments.  

For other external services, retrieve your API keys and fill in the corresponding values.  

Once everything is configured, you can build and start the service with:  

```
npm install -g pnpm
pnpm install
pnpm vite build
pnpm tsx server.ts
```
