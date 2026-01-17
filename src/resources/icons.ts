import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiPlantFill
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiC,
  SiGnubash,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaJava, FaPython, FaHtml5, FaCss3, FaDocker, FaReact, FaGitAlt, FaNodeJs, FaAngular, FaVuejs, FaAws, FaAndroid, FaPhp, FaLinux } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  java: FaJava,
  python: FaPython,
  html: FaHtml5,
  css: FaCss3,
  docker: FaDocker,
  react: FaReact,
  git: FaGitAlt,
  node: FaNodeJs,
  angular: FaAngular,
  vue: FaVuejs,
  aws: FaAws,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  c: SiC,
  android: FaAndroid,
  php: FaPhp,
  linux: FaLinux,
  bash: SiGnubash,
  libgdx: HiOutlineRocketLaunch,
  FaStar: FaStar,
  PiPlantFill: PiPlantFill,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
