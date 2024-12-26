import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export interface WorkExperienceProps {
  start?: Date,
  end?: Date,
  imageUrl?: string,
  url: string,
  title: string,
  description: string,
  tags: string[],
}

const WorkExperience = ({ start, end, imageUrl, url, title, description, tags }: WorkExperienceProps) => {
  const endString = end ? formatDate(end) : "PRESENT";

  return <Link className="grid grid-cols-5 gap-3 group hover:bg-neutral-600 p-5" href={url} target="_blank">
    {start && <h4 className="col-span-2 text-xs">{formatDate(start)} - {endString}</h4>}
    {imageUrl && <Image className="col-span-2" src={imageUrl} alt={title} width={600} height={400}/>}
    <div className="col-span-3 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h3 className="text-base text-white font-semibold group-hover:text-green-500">{title}</h3>
        <ArrowUpRightIcon
          className="text-base text-white size-5 transform transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-500"
        strokeWidth={2.5}/>
      </div>
      <p>{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => {
          return <Tag key={index} value={tag}/>
        })}
      </div>
    </div>
  </Link>
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }).toUpperCase();
}

const Tag = ({ value }: { value: string }) => {
  return <div className="bg-emerald-800 text-green-500 text-sm px-3 rounded-full">{value}</div>
}

export default WorkExperience;