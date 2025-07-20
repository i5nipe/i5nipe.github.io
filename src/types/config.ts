<<<<<<< HEAD
import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from '@constants/constants'
=======
import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";
>>>>>>> upstream/main

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang: string;

<<<<<<< HEAD
  themeColor: {
    hue: number
    fixed: boolean
  }
  banner: {
    enable: boolean
    src: string
    position?: 'top' | 'center' | 'bottom'
    credit: {
      enable: boolean
      text: string
      url?: string
    }
  }
  toc: {
    enable: boolean
    depth: 1 | 2 | 3
  }
  googleAnalytics?: {
    id: string
  }
=======
	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};
>>>>>>> upstream/main

	favicon: Favicon[];
};

export type Favicon = {
<<<<<<< HEAD
  src: string
  theme?: 'light' | 'dark'
  sizes?: string
}
=======
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};
>>>>>>> upstream/main

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
<<<<<<< HEAD
  enable: boolean
  name: string
  url: string
}

export type LIGHT_DARK_MODE =
  | typeof LIGHT_MODE
  | typeof DARK_MODE
  | typeof AUTO_MODE

export type BlogPostData = {
  body: string
  title: string
  published: Date
  description: string
  tags: string[]
  draft?: boolean
  image?: string
  category?: string
  prevTitle?: string
  prevSlug?: string
  nextTitle?: string
  nextSlug?: string
}
=======
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};
>>>>>>> upstream/main
