# Swag(ger)
Our team designed a series of swag for the event, including a custom patch in collaboration with Girl Scouts of Greater New York, t-shirts for all attendees, some badges that could be pinned to anything, and of-course stickers!! All designed by [@zoyahussain](https://github.com/zoya-hussain) and [@maggie](https://github.com/maggie-j-liu).

## 💖 Patch: 
<img width="250" alt="Screenshot 2023-04-04 at 9 46 47 AM" src="https://user-images.githubusercontent.com/65808924/229813242-e3898054-90cb-4398-906a-185de0bf3310.png">

In designing the patch for Horizon, I researched previous designs from Girl Scouts's archived patches, and looked to the badges and patches I had accrued in my experience as a Girl Scout. As well, I looked through the Hack Club Slack, in an effort to find popular symbols/imagery representative of HC. In doing so, I encountered Orpheus, HC's beloved mascot. After finalizing the color scheme (which drew from Girl Scouts's trademark colors), I used Procreate as a primary design software and set to work drafting the first iterations of a patch. Thereafter, I used font pairings from online, aiming to pair a bohemian, modern retro font with a monospace font. With Horizon being my first opportunity to design a patch, I requested input from community members, who were able to provide advice and recommondations on formatting.

## 👚 T-Shirts: 
<img width="700" alt="Screenshot 2023-04-04 at 9 47 27 AM" src="https://user-images.githubusercontent.com/65808924/229813211-f502198c-535d-4810-8493-2d57cffcc79b.png">

For shirt and logo design, I sampled the text from the patch for consistency with additional stylization, and drafted some design variations and formattings. In its initial stages, the Horizon logo featured a skyline, which is an element I wished to feature in the final designs (as Horizon was first dubbed "metropolis"). Once again, I used Procreate due to my familiarity with the program, but I struggled to maintain the quality of designs due to the lack of an 'Export with SVG' option.

## 🥼 Crewnecks:
<img alt="4 girls with a crewneck that says One Line at a Time with their backs facing the viewer" width="700" src="https://user-images.githubusercontent.com/62197228/230696808-a89caf77-067a-4c7c-9754-f6f4e186357e.jpg">

Designing the crewnecks was a challenge. @abbyfischler had a whole moodboard made of what she like and didn't like and it was my responsibility to figure out what in the world this crewneck looked like: fashionable, but with a giant Hack Club wordmark on the front. Working in combination with both Adobe Illustrator and Figma, I created this organic shape using the warp and flag tools in Illustrator and paired it with the stroke and fill tools on Figma to create the designs. Abby had the wonderful idea to put "One Line at a Time" on the back which I loved, so we went with it. After numerous rounds of revisions and both Abby and I saying, "yeah, actually I don't like it," we ended up with the design you see above. -[@sarthak](https://github.com/sarthaktexas)

## 📍 Badges: 
<img width="700" alt="Screenshot 2023-04-04 at 9 50 11 AM" src="https://user-images.githubusercontent.com/65808924/229813989-e65589b4-012f-41bb-a848-7feb0082b71a.png">

When designing pins for Horizon, I used both Procreate and Figma (Procreate for Horizon pins, and Figma for superlative pins). For the Horizon pins, I wanted to use a hot pink and dark green color combination, drawing from the color palette, due to their classic and balanced pairing. For the superlative pins, I brainstormed with [@sarthak](https://github.com/sarthaktexas) and used a color-blocking tool in Figma to achieve a "vectorized" art style for the cookie designs, and placed banners on top of the cookies, akin to sashes worn by Girl Scouts. 

## 🔑 PCB Keychains

I (Maggie) designed some PCB (printed circuit board) keychains of Orpheus -- they lit up through a simple circuit, powered by a cr2032 coin cell battery. For the art, I used Procreate and Figma -- Procreate for drawing everything and Figma for masking out the different layers needed for PCB art. I also heavily utilized [SVGcode](https://svgco.de) to convert the raster drawings from Procreate into SVGs.

For the actual PCB's schematic and design, I used [EasyEDA](https://easyeda.com), an online PCB design tool. EasyEDA is associated with JLCPCB (the PCB manufacturer I used), so it had footprints for the parts in the JLCPCB library (super convenient!).

### Schematic

<img width="563" alt="schematic for the keychain, showing a circuit consisting of a battery, switch, resistor, and LED" src="https://user-images.githubusercontent.com/63619830/229932902-d33a93d5-032c-4359-9c41-a36668515626.png">

The actual hardware part of the keychain is just a simple circuit -- a battery, switch, resistor, and LED. Since I chose to have JLCPCB assemble the PCBs in addition to manufacturing, I picked parts from their [parts library](https://jlcpcb.com/parts).

### PCB Design

<img width="475" alt="the keychain's pcb design" src="https://user-images.githubusercontent.com/63619830/229934293-cf6aa27d-14b4-40b8-9282-71470b862125.png">

After using SVGcode to convert my drawings into SVGs, I used an [SVG Import Extension](https://github.com/xsrf/easyeda-svg-import) to import them into EasyEDA. I was able to use different layers to create different colors on the PCB: 
  - silkscreen is white
  - the soldermask is black
  - no soldermask with copper underneath is silver
  - no soldermask and no copper is yellow and translucent

I placed the components onto the back of the PCB -- in order to make assembly cheaper (by placing parts only on one side), I used a side mounted LED and used no soldermask and no copper to create a translucent window, so the LED light could shine through to the front.

And here's the final PCB! I think it turned out really cute, although some of the details (the Hack Club flag on the back) were not super clear. If I were to do it again, I'd make sure all the designs are big enough to be clearly printed.

<div>
<img width="350" alt="the front of the finished keychain" src="https://user-images.githubusercontent.com/63619830/229934867-dd5cc940-c605-425b-8b49-a691947624be.jpg">
<img width="350" alt="the back of the finished keychain, with all the parts soldered on" src="https://user-images.githubusercontent.com/63619830/229934881-857cba94-d100-46df-a89a-0a1806cc97e5.jpg">
</div>

## Other thoughts on design
- Consulting others on design (and creative arts in general) is a good idea when looking to improve upon designs, whether it be on construction or cohesiveness, as they can grant a "fresh eye", a new perspective on aspects that may be overlooked from the artist's viewpoint and ideas on accessibility. 
- Using design resources like Dribbble, Behance, and even Pinterest can be useful when looking for inspiration, but personalizing designs and not yielding to impermanent design mictrotrends is optimal when considering the purpose of your design.
