'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Workflow, Building2, TrendingUp, Briefcase, Mail } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { PRODUCTS } from '@/data/products';
import { SOLUTIONS } from '@/data/solutions';
import { moduleSlug } from '@/lib/slug';

const SIMPLE_LINKS = [
	{ label: 'Platform', href: '/platform' },
	{ label: 'Pricing', href: '/pricing' },
];

const COMPANY_LINKS = [
	{ label: 'About Us', href: '/about', icon: Building2, description: 'Our story, mission and values' },
	{ label: 'Use Cases', href: '/use-cases', icon: TrendingUp, description: 'How organizations use the suite' },
	{ label: 'Careers', href: '/careers', icon: Briefcase, description: 'Teams we hire for and how to join' },
	{ label: 'Contact', href: '/contact', icon: Mail, description: 'Request a demo or talk to us' },
];

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
	const [openMobileId, setOpenMobileId] = React.useState<string | null>(null);
	const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
	const scrolled = useScroll(15);

	const openMenu = (id: string) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setActiveMenu(id);
	};

	const scheduleClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
	};

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const triggerClass = buttonVariants({
		variant: 'ghost',
		className: 'text-xs font-bold tracking-wide text-foreground hover:text-primary-strong hover:bg-transparent normal-case gap-1',
	});

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out border-b border-transparent',
				{
					'bg-background/95 border-border/80 backdrop-blur-md shadow-sm py-2':
						scrolled && !open,
					'bg-transparent py-4': !scrolled && !open,
					'bg-background py-3 border-border': open,
				},
			)}
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
				{/* Brand Wordmark */}
				<Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90 shrink-0">
					<img
						src="/login-logo-final.png"
						alt="Gen-Z Technologies"
						className="h-9 w-auto object-contain"
					/>
					<span className="font-display font-bold text-lg tracking-tight text-foreground hidden sm:inline">
						Gen-Z Technologies
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-1 lg:flex" onMouseLeave={scheduleClose}>
					{/* Products mega-menu */}
					<div className="relative" onMouseEnter={() => openMenu('products')}>
						<button className={triggerClass}>
							Products
							<ChevronDown className={cn('w-3 h-3 transition-transform', activeMenu === 'products' && 'rotate-180')} />
						</button>

						<div
							className={cn(
								'fixed left-1/2 -translate-x-1/2 pt-4 transition-all duration-150',
								activeMenu === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none',
							)}
						>
							<div className="w-[min(1060px,calc(100vw-3rem))] bg-white rounded-2xl border border-border shadow-2xl overflow-hidden">
								<div className="grid grid-cols-4 gap-px bg-border">
									{PRODUCTS.map((product) => (
										<div key={product.id} className="bg-white p-5">
											<Link href={product.href} className="group block mb-3 pb-3 border-b border-border">
												<span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
													{product.tagline}
												</span>
												<p className="font-display font-bold text-foreground group-hover:text-primary-strong transition-colors flex items-center gap-1 mt-0.5">
													{product.label}
													<ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
												</p>
											</Link>
											<ul className="space-y-0.5">
												{product.modules.map((mod) => {
													const Icon = mod.icon;
													return (
														<li key={mod.title}>
															<Link
																href={`${product.href}#${moduleSlug(mod.title)}`}
																className="flex items-center gap-2.5 px-2 py-1.5 -mx-2 rounded-lg hover:bg-background transition-colors group/item"
															>
																<Icon className="w-3.5 h-3.5 text-muted group-hover/item:text-primary-strong transition-colors shrink-0" />
																<span className="text-xs font-semibold text-muted group-hover/item:text-foreground transition-colors leading-tight">
																	{mod.title}
																</span>
															</Link>
														</li>
													);
												})}
											</ul>
										</div>
									))}
								</div>

								<Link
									href="/platform"
									className="flex items-center justify-between gap-3 bg-background px-5 py-3.5 border-t border-border hover:bg-white transition-colors group"
								>
									<span className="flex items-center gap-2.5">
										<Workflow className="w-4 h-4 text-primary-strong" />
										<span className="text-xs font-bold text-foreground">
											All four share one learner profile
										</span>
										<span className="text-xs text-muted font-medium hidden xl:inline">
											&mdash; see how the platform connects
										</span>
									</span>
									<ArrowRight className="w-4 h-4 text-primary-strong group-hover:translate-x-0.5 transition-transform" />
								</Link>
							</div>
						</div>
					</div>

					{/* Solutions dropdown */}
					<div className="relative" onMouseEnter={() => openMenu('solutions')}>
						<Link href="/solutions" className={triggerClass}>
							Solutions
							<ChevronDown className={cn('w-3 h-3 transition-transform', activeMenu === 'solutions' && 'rotate-180')} />
						</Link>

						<div
							className={cn(
								'absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-150',
								activeMenu === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none',
							)}
						>
							<div className="w-[340px] bg-white rounded-2xl border border-border shadow-2xl p-3">
								{SOLUTIONS.map((solution) => {
									const Icon = solution.icon;
									return (
										<Link
											key={solution.slug}
											href={`/solutions/${solution.slug}`}
											className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors"
										>
											<div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
												<Icon className="w-4 h-4" />
											</div>
											<div>
												<p className="text-xs font-bold text-foreground leading-tight">{solution.label}</p>
												<p className="text-[11px] text-muted font-medium leading-snug mt-0.5">{solution.audience}</p>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>

					{SIMPLE_LINKS.map((link) => (
						<Link key={link.href} href={link.href} className={triggerClass} onMouseEnter={scheduleClose}>
							{link.label}
						</Link>
					))}

					{/* Company dropdown */}
					<div className="relative" onMouseEnter={() => openMenu('company')}>
						<button className={triggerClass}>
							Company
							<ChevronDown className={cn('w-3 h-3 transition-transform', activeMenu === 'company' && 'rotate-180')} />
						</button>

						<div
							className={cn(
								'absolute top-full right-0 pt-4 transition-all duration-150',
								activeMenu === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none',
							)}
						>
							<div className="w-[300px] bg-white rounded-2xl border border-border shadow-2xl p-3">
								{COMPANY_LINKS.map((link) => {
									const Icon = link.icon;
									return (
										<Link
											key={link.href}
											href={link.href}
											className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors"
										>
											<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary-strong flex items-center justify-center shrink-0 mt-0.5">
												<Icon className="w-4 h-4" />
											</div>
											<div>
												<p className="text-xs font-bold text-foreground leading-tight">{link.label}</p>
												<p className="text-[11px] text-muted font-medium leading-snug mt-0.5">{link.description}</p>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</nav>

				{/* Desktop Auth Actions */}
				<div className="hidden lg:flex items-center gap-3 shrink-0">
					<Link
						href="/login"
						className="text-xs font-bold text-foreground hover:text-primary-strong transition-colors px-3"
					>
						Log in
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wide hover:bg-primary-hover transition-colors shadow-sm"
					>
						Request a Demo
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="lg:hidden border-border text-foreground bg-white rounded-full hover:bg-background"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5 text-foreground" duration={300} />
				</Button>
			</div>

			{/* Mobile Drawer */}
			<div
				className={cn(
					'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden bg-background border-t border-border lg:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div className="flex h-full w-full flex-col justify-between p-6 overflow-y-auto">
					<div className="grid gap-y-1 pt-2">
						<p className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider mb-1">Products</p>
						{PRODUCTS.map((product) => {
							const isOpen = openMobileId === product.id;
							return (
								<div key={product.id} className="border-b border-border/60">
									<div className="flex items-center justify-between">
										<Link
											onClick={() => setOpen(false)}
											className="text-base font-bold tracking-tight text-foreground hover:text-primary-strong py-3"
											href={product.href}
										>
											{product.label}
										</Link>
										<button
											onClick={() => setOpenMobileId(isOpen ? null : product.id)}
											className="p-2 text-muted"
											aria-label={`Toggle ${product.label} modules`}
										>
											<ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
										</button>
									</div>
									{isOpen && (
										<div className="pb-3 pl-1 grid gap-0.5">
											{product.modules.map((mod) => (
												<Link
													key={mod.title}
													href={`${product.href}#${moduleSlug(mod.title)}`}
													onClick={() => setOpen(false)}
													className="text-sm font-semibold text-muted hover:text-primary-strong py-1.5"
												>
													{mod.title}
												</Link>
											))}
										</div>
									)}
								</div>
							);
						})}

						<p className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider mt-5 mb-1">Solutions</p>
						{SOLUTIONS.map((solution) => (
							<Link
								key={solution.slug}
								href={`/solutions/${solution.slug}`}
								onClick={() => setOpen(false)}
								className="text-base font-bold tracking-tight text-foreground hover:text-primary-strong py-2.5 border-b border-border/60"
							>
								{solution.label}
							</Link>
						))}

						<p className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider mt-5 mb-1">Company</p>
						{[...SIMPLE_LINKS, ...COMPANY_LINKS].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="text-base font-bold tracking-tight text-foreground hover:text-primary-strong py-2.5 border-b border-border/60"
							>
								{link.label}
							</Link>
						))}
					</div>

					<div className="flex flex-col gap-3 pt-8 pb-8">
						<Link
							href="/login"
							onClick={() => setOpen(false)}
							className="text-center text-sm font-bold text-foreground border border-border rounded-full py-3"
						>
							Log in
						</Link>
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className="text-center text-sm font-bold text-white bg-primary-strong rounded-full py-3"
						>
							Request a Demo
						</Link>
						<div className="flex justify-between text-[11px] text-muted font-mono pt-4">
							<span>support@gen-ztechnologies.com</span>
							<span>HYDERABAD</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
