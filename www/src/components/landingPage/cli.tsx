/** @jsxImportSource react */
import Typist from "react-typist";

export default function CodeCard() {
  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-lg sm:w-[600px]"
      aria-hidden="true"
    >
      <div className="inverse-toggle border-t3-purple-200/20 text-t3-purple-50 h-[300px] overflow-hidden rounded-lg border bg-white/10 px-1 pt-4 pb-6 font-mono text-[10px] leading-normal subpixel-antialiased shadow-lg transition-all sm:h-[400px] sm:px-2 sm:text-xs md:px-5">
        <div className="top mb-2 flex">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
          npm create t3-app@latest
          <Typist.Delay ms={1250} />
        </Typist>
        <Typist
          className="translate-y-[-0.2rem] bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text font-mono text-[7px] leading-1 text-transparent sm:text-sm md:translate-y-[-0.4rem]"
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <Typist.Delay ms={2000} />
          &nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;___&nbsp;&nbsp;&nbsp;__&nbsp;_____&nbsp;___&nbsp;&nbsp;&nbsp;_____&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;/&nbsp;__|&nbsp;_&nbsp;\&nbsp;__|&nbsp;/&nbsp;&nbsp;\_&nbsp;&nbsp;&nbsp;_|&nbsp;__|&nbsp;|_&nbsp;&nbsp;&nbsp;_|__&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\&nbsp;|&nbsp;_&nbsp;\&nbsp;_&nbsp;\&nbsp;&nbsp;
          <br />
          &nbsp;&nbsp;|&nbsp;(__|&nbsp;&nbsp;&nbsp;/&nbsp;_|&nbsp;/&nbsp;/\&nbsp;\|&nbsp;|&nbsp;|&nbsp;_|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;|_&nbsp;\&nbsp;&nbsp;/&nbsp;/\&nbsp;\|&nbsp;&nbsp;_/&nbsp;&nbsp;_/&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;\___|_|_\___|_/¯¯\_\_|&nbsp;|___|&nbsp;&nbsp;&nbsp;|_|&nbsp;|___/&nbsp;/_/¯¯\_\_|&nbsp;|_|&nbsp;&nbsp;
          <br />
        </Typist>
        <Typist
          startDelay={2100}
          className=""
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <div>
            ? What will your project be called? (my-t3-app)
            <Typist.Delay ms={500} />
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              avgTypingDelay={50}
              className="inline pl-1 text-blue-400"
            >
              my-t3-app
            </Typist>
          </div>
          <br />
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={4800}
          avgTypingDelay={-10000}
        >
          ? Will you be using JavaScript or TypeScript? (Use arrow keys)
          <br />
          ❯ TypeScript
          <br />
          &nbsp;&nbsp;JavaScript
          <Typist.Backspace count={87} delay={1000} />
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={-10000}
            className="translate-y-[-1.8rem] md:translate-y-[-2.0rem]"
          >
            <span>
              <span>? Will you be using JavaScript or TypeScript?</span>
              <span className="pl-2 text-blue-400">TypeScript</span>
            </span>
          </Typist>
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={6300}
          avgTypingDelay={-10000}
          className="translate-y-[-1.8rem] text-green-400 md:translate-y-[-2.0rem]"
        >
          Good choice! Using TypeScript!
          <br />
          <Typist.Delay ms={1000} />
          <span className="text-white">{`? Which packages would you like to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)`}</span>
          <br />
          <span className="text-blue-400">❯</span>
          <span className="text-blue-400">◯ nextAuth</span>
          <br />
          <span className="text-white">&nbsp;◯ prisma</span>
          <br />
          <span className="text-white">&nbsp;◯ tailwind</span>
          <br />
          <span className="text-white">&nbsp;◯ trpc</span>
          <Typist.Delay ms={900} />
          <Typist.Backspace count={38} />
          <Typist.Delay ms={1200} />
          <Typist.Backspace count={136} />
          <span></span>
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={10000}
          avgTypingDelay={-10000}
          className="translate-y-[-5.6rem] sm:translate-y-[-6.0rem]"
        >
          <span>? Which packages would you like to enable?</span>
          <span className="pl-1 text-blue-400">
            nextAuth, prisma, tailwind, trpc
          </span>
        </Typist>
        <Typist
          cursor={{ show: false }}
          avgTypingDelay={-20000}
          className="translate-y-[-4.6rem] sm:translate-y-[-5.0rem]"
          startDelay={8700}
        >
          <span className="text-blue-400">❯</span>
          <span className="text-blue-400">◉ nextAuth</span>
          <br />
          &nbsp;◉ prisma
          <br />
          &nbsp;◉ tailwind
          <br />
          &nbsp;◉ trpc
          <br />
          <Typist.Delay ms={1000} />
          <Typist.Backspace count={50} />
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={10500}
          avgTypingDelay={-10000}
          className="translate-y-[-9.4rem] sm:translate-y-[-10rem]"
        >
          <div className="flex whitespace-nowrap">
            <span>? Initialize a new git repository? (Y/n)</span>
            <Typist.Delay ms={1000} />
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              className="pl-2 text-blue-400"
            >
              n
            </Typist>
            <Typist.Delay ms={1500} />
            <Typist.Backspace count={1} />
            <span className="text-blue-400">No</span>
          </div>
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={13000}
          avgTypingDelay={-10000}
          className="translate-y-[-9.4rem] text-green-400 sm:translate-y-[-10rem]"
        >
          Sounds good! You can come back and run git init later.
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={14500}
          avgTypingDelay={-10000}
          className="translate-y-[-9.4rem] sm:translate-y-[-10rem]"
        >
          <div>
            <span className="whitespace">
              ? Would you like us to run npm install? (Y/n)
            </span>
            <Typist.Delay ms={1000} />
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              className="inline pl-2 text-blue-400"
              avgTypingDelay={-10000}
            >
              y
              <Typist.Backspace count={1} delay={500} />
              <span className="text-blue-400">Yes</span>
            </Typist>
          </div>
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={16000}
          avgTypingDelay={-10000}
          className="translate-y-[-9.4rem] text-green-400 sm:translate-y-[-10rem]"
        >
          Alright. We&apos;ll install the dependencies for you!
        </Typist>
      </div>
    </div>
  );
}
