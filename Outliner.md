---
date: 2023-02-20
tags: JGGE_workshop
---

# Outliner

- We usually write a journal paper in **IMRaD** structure.
  - Introduction, Method, Results and Discussion
  - Several paragraphs in each section
- *Outliner* plug-in helps us to charge the order of sentences/paragraphs

---

## Example

The following outline example is the one I actually made for this workshop.

### Introduction and concept

- Who am I?
  - position?
  - research interest? and other interest?
  - github repositories?
  - how nerd am I?
- Why is it important to organize research information?
    - PhD candidates, Post-docs, and any researchers need to publish papers as many as possible
    - To write research (journal) papers, sometimes it is suggested:
        - start from an outline
        - even write an outline/paper before starting experiments
    - To produce research papers, you need:
        - hypothesis <--- clear descriptions
        - issues/problems to be solved <--- a lot of literature surveys
        - experiments/simulations <--- clear descriptions, explanations
            - data are generated on this stage ---> organizing research data is important as well, but different from this topic
        - discussions <--- compare with former studies
- What is important when organizing research information?
    - Searchable (difficult for hand-written phyical notes)
    - Understandable (for future you)
    - Linking between concepts, ideas, facts, etc.
    - Permanent (at least you can believe so)
        - Easy (to keep, add info, manage, and migrate)
        - Fun
- Concept
    - **Zettelkasten** (slip box)
        - Niklas Luhman (19xx-19yy, German)
        - *"How to take smart notes"* by Sonke Ahrens
        - atomic --- one concept in one card
        - link --- naming rule for the card, and linking information on cards
    - Kyoto-U card-type
        - Tadao Umesao (『知的生産の技術』, Japanese)
        - Write one concept in one card
        - Store the cards in slip boxes
    - 

### Methodology

- Apps
    - Notion
        - online cloud service
        - a lot of page formats
        - link and backlink
    - Roam research
        - online cloud service
        - outlines
    - Obsidian
        - local desktop app with local files (even if the company vanishes, your data remains in your computer as text files and directories)
    - logseq
        - online cloud service
    - Emacs Org-mode
        - local files
        - rich functionalities with elisp language (not easy for beginners)
    - else?
- **Obsidian**
    - wiki-type note-taking app
    - a note is a markdown file
    - file/directory tree is completely on local
    - graph view for looking at connections between notes
    - there are some templates or starter kits on the internet
- Markdown format
    - a human-friendly text-file format that can be easily converted to other formats (HTML, LaTeX, etc.)
    - sections, lists, tables, links, embedding images and movies, math formulas
    - easy to write simple documents without thinking complex syntax
- Not to make hierarchical structures using folders, let the notes generate organic structures by linking and tagging.
    - like the way organizing e-mails using only inbox and archive folders

### Way of a nerd

- This may be a bit complicated and not for beginners, but it would not be useless to know how a nerd is organizing his research information...
- Map of Contents (MOC), index files, hub notes, dashboards, or tags
    - sometimes we forget even title and filename, and struggle to find a specific note
    - MOC/hub-note helps to reach such a file without remembering even title and filename
- Weekly notes
    - periodic notes help to write diaries, work logs, todos, etc.
    - I personally prefer granularity of weekly note over daily note
    - Calendar plugin in Obsidian helps.
- Outliner
    - example in IMRaD structure
    - to show easily change the structure
        - level of items
        - order of items
- Metadata (*Nerdier*)
    - metadata is useful when converting files to a database
        - for example?
    - markdown can include metadata as front matter in yaml format
    - Obsidian can generate tables and/or lists from metadata of files
        - for example?
    - Probably, this metadata-extraction from markdown files would be implemented in OS-level functionality. So it would be beneficial to get used to store metadata in markdown file to describe research data in directories.
- Journal papers and literature notes (*Nerdiest*)
    - it is important to organize journal papers that you have read or should be cited in your manuscript.
    - Apps
        - Zotero
        - Mendeley
        - Paperpile
    - A community plugin *Citations* in Obsidian helps...
        - Paperpile can automatically export whole data in it to a BibTex file
        - Obsidian can look for a paper using any keyword and create a literature note

### What's yours?

- I am not saying this is the best way of organizing your information, just introducing my recent way of doing that.
- I will be happy to know other ways:
    - more efficient?
    - more enjoyable?
    - nerdier?
    - automated?
- Take 30 min? to try using Obsidian

### Conclusions

- Organize your research information (concepts, ideas, literatures, results, outlines, etc.) like a nerd
    - atomic --- one idea in one file
    - linking --- linking and tagging to connect notes (not making hierarchical structures using folders)
    - markdown format --- easy to write and read, convertible to other formats
- Nerdier tips
    - metadata in front-matter --- consistent way of adding information to notes
    - MOC/hub notes --- a guide of your notes
    - weekly notes --- dairies and work logs
- Nerdiest tips
    - journal papers ---> literature notes
