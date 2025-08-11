import TextType from "@/components/text-animate/TextType" 

const Name = () => {
  return (
    <TextType
        className="text-4xl font-bold mt-4 text-blue-700"
        text={["Rattaphon Siriphan","รัตพล ศิริพันธ์"]}
        typingSpeed={150}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
        textColors={"#0033FF"}
    />
  )
}
export default Name