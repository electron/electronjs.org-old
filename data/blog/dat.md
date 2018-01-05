---
title: 'Project of the Week: Dat'
author: 
  - karissa
  - yoshuawuyts
  - maxogden
  - zeke
date: '2017-02-21'
---

This week's featured project is [Dat](https://datproject.org/), a
[grant-funded](https://changelog.com/rfc/6), open source, decentralized tool
for distributing data sets. Dat is built and maintained by a
[geodistributed team](https://datproject.org/team), many of whom helped
write this post.

---

[![A screenshot of the main view of dat-desktop, showing a few rows of shared
dats](https://cloud.githubusercontent.com/assets/2289/23175925/dbaee7ec-f815-11e6-80cc-3041203c7842.png)](https://github.com/datproject/dat-desktop)

## First off what is Dat?

We wanted to bring the best parts of peer to peer and distributed systems to data sharing. We started with scientific data sharing and then began branching out into research institutions, government, public service, and open source teams as well.

Another way to think about it is a sync and upload app like Dropbox or BitTorrent Sync, except Dat is [open source](https://github.com/datproject). Our goal is to be a a powerful, open source, non-profit data sharing software for big, small, medium, small-batch and big-batch data.

To use the `dat` CLI tool, all you have to type is:

```sh
dat share path/to/my/folder
```

And dat will create a link that you can use to send that folder to someone else -- no central servers or third parties get access to your data. Unlike BitTorrent, it's also impossible to sniff who is sharing what ([see the Dat Paper draft for more details](https://github.com/datproject/docs/blob/master/papers/dat-paper.md)).

## Now we know what Dat is. How does Dat Desktop fit in?

[Dat Desktop](https://github.com/datproject/dat-desktop) is a way to make Dat accessible to people who can't or don't want to use the command line. You can host multiple dats on your machine and serve the data over your network.

## Can you share some cool use cases?

### DataRefuge + Project Svalbard

We're working on a thing codenamed [Project Svalbard](https://github.com/datproject/svalbard) that is related to [DataRefuge](http://www.ppehlab.org/datarefuge), a group working to back up government climate data at risk of disappearing. Svalbard is named after the Svalbard Global Seed Vault in the Arctic which has a big underground backup library of plant DNA. Our version of it is a big version controlled collection of public scientific datasets. Once we know and can trust the metadata, we can build other cool projects like a [distributed volunteer data storage network](https://github.com/datproject/datasilo/).

### California Civic Data Coalition

[CACivicData](http://www.californiacivicdata.org/) is an open-source archive serving up daily downloads from CAL-ACCESS, California's database tracking money in politics. They do [daily releases](http://calaccess.californiacivicdata.org/downloads/0), which means hosting a lot of duplicate data across their zip files. We're working on hosting their data as a Dat repository which will reduce the amount of hassle and bandwidth needed to refer to specific version or update to a newer version.

## Electron Updates

This one isn't concrete yet, but we think a fun use case would be putting a compiled Electron app in a Dat repository, then using a Dat client in Electron to pull the latest deltas of the built app binary, to save on download time but also to reduce bandwidth costs for the server.

## Who should be using Dat Desktop?

Anyone who wants to share and update data over a p2p network. Data scientists, open data hackers, researchers, developers. We're super receptive to feedback if anyone has a cool use case we haven't thought of yet. You can drop by our [Gitter Chat](https://gitter.im/datproject/discussions) and ask us anything!

## What's coming next in Dat and Dat Desktop?

User accounts and metadata publishing. We are working on a Dat registry web app to be deployed at [datproject.org](https://datproject.org/) which will basically be an 'NPM for datasets', except the caveat being we are just going to be a metadata directory and the data can live anywhere online (as opposed to NPM or GitHub where all the data is centrally hosted, because source code is small enough you can fit it all in one system). Since many datasets are huge, we need a federated registry (similar to how BitTorrent trackers work). We want to make it easy for people to find or publish datasets with the registry from Dat Desktop, to make the data sharing process frictionless.

Another feature is multi-writer/collaborative folders. We have big plans to do collaborative workflows, maybe with branches, similar to git, except designed around dataset collaboration. But we're still working on overall stability and standardizing our protocols right now!

## Why did you choose to build Dat Desktop on Electron?

Dat is built using Node.js, so it was a natural fit for our integration. Beyond this, our users use a variety of machines
since scientists, researchers and government officials may be forced to use certain setups for their institutions -- this means we need to be able to target Windows and Linux as well as Mac. Dat Desktop gives us that quite easily.

## What are some challenges you've faced while building Dat and Dat Desktop?

Figuring out what people want. We started with tabular datasets, but we realized that it was a bit of a complicated problem to solve and that most people don't use databases. So half way through the project, we redesigned everything from scratch to use a filesystem and haven't looked back.

We also ran into some general Electron infrastructure problems, including:

- Telemetry - how to capture anonymous usage statistics
- Updates - It's kind of piecemeal and magic to set up automatic updates
- Releases - XCode signing, building releases on Travis, doing beta builds, all were challenges.

We also use Browserify and some cool Browserify Transforms on the 'front end' code in Dat Desktop (which is kind of weird because we still bundle even though we have native `require` -- but it's because we want the Transforms). To better help manage our CSS we switched from Sass to using [sheetify](https://github.com/stackcss/sheetify). It's greatly helped us modularize our CSS and made it easier to move our UI to a component oriented architecture with shared dependencies. For example [dat-colors](https://github.com/Kriesse/dat-colors) contains all of our colors and is shared between all our projects.

We've always been a big fan of standards and minimal abstractions. Our whole interface is built using regular DOM nodes with just a few helper libraries. We've started to move some of these components into [base-elements](https://base.choo.io), a library of low-level reusable components. As with most of our technology we keep iterating on it until we get it right, but as a team we have a feeling we're heading in the right direction here.

## In what areas should Electron be improved?

We think the biggest pain point is native modules. Having to rebuild your modules for Electron with npm adds complexity to the workflow. Our team developed a module called [`prebuild`](http://npmjs.org/prebuild) which handles pre-built binaries, which worked well for Node, but Electron workflows still required a custom step after installing, usually `npm run rebuild`. It was annoying. To address this we recently switched to a strategy where we bundle all compiled binary versions of all platforms inside the npm tarball. This means tarballs get larger (though this can be optimized with `.so` files - shared libraries), this approach avoids having to run post-install scripts and also avoids the `npm run rebuild` pattern completely. It means `npm install` does the right thing for Electron the first time.

## What are your favorite things about Electron?

The APIs seem fairly well thought out, it's relatively stable, and it does a pretty good job at keeping up to date with upstream Node releases, not much else we can ask for!

## Any Electron tips that might be useful to other developers?

If you use native modules, give [prebuild](https://www.npmjs.com/package/prebuild) a shot!

## What's the best way to follow Dat developments?

Follow [@dat_project](https://twitter.com/dat_project) on Twitter, or
subscribe to our [email newsletter](https://tinyletter.com/datdata).

