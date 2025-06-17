"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Code,
  Zap,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Bot,
  Lightbulb,
  Globe,
  Shield,
  Rocket,
  ChevronDown
} from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
}

const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear"
    }
  }
}

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                variants={rotateAnimation}
                animate="animate"
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white">Lotook</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
              <motion.a
                href="#services"
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
              <motion.a
                href="#technology"
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Technology
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
              <motion.a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInDown} className="mb-6">
              <motion.div
                variants={pulseAnimation}
                animate="animate"
              >
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
                  AI-Powered Future
                </Badge>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Redefining the
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              >
                Boundaries of AI
              </motion.span>
              Applications
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Lotook is dedicated to providing cutting-edge AI solutions for enterprises.
              Through innovative technology and professional services, we help clients
              seize opportunities in digital transformation and achieve breakthrough growth.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3">
                  Explore Solutions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16"
              variants={fadeInUp}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="flex justify-center"
              >
                <ChevronDown className="w-6 h-6 text-slate-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50 relative">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">About Lotook</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We are an innovative technology company focused on AI application development,
                with deep technical expertise and rich industry experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={scaleIn}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 text-center h-full">
                    <CardHeader>
                      <motion.div
                        className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <Target className="w-6 h-6 text-blue-400" />
                      </motion.div>
                      <CardTitle className="text-white">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">
                        Through cutting-edge AI technology, we create unlimited possibilities for enterprises,
                        driving digital transformation and building an intelligent future.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={scaleIn}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 text-center h-full">
                    <CardHeader>
                      <motion.div
                        className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                        variants={floatingAnimation}
                        animate="animate"
                        transition={{ delay: 0.2 }}
                      >
                        <Lightbulb className="w-6 h-6 text-purple-400" />
                      </motion.div>
                      <CardTitle className="text-white">Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">
                        Continuously exploring the boundaries of AI technology, transforming
                        the latest research into practical business solutions.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={scaleIn}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 text-center h-full">
                    <CardHeader>
                      <motion.div
                        className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                        variants={floatingAnimation}
                        animate="animate"
                        transition={{ delay: 0.4 }}
                      >
                        <Users className="w-6 h-6 text-green-400" />
                      </motion.div>
                      <CardTitle className="text-white">Team Excellence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">
                        Gathering top AI experts and engineers with full-stack technical
                        capabilities from R&D to deployment.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive AI application development services, from concept design
                to product delivery - complete solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInLeft}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Bot className="w-10 h-10 text-blue-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">Intelligent Dialogue Systems</CardTitle>
                      <CardDescription className="text-slate-300">
                        AI chatbots, virtual assistants, and conversational AI based on large language models
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Multi-turn conversation understanding</li>
                        <li>• Sentiment analysis recognition</li>
                        <li>• Business knowledge base integration</li>
                        <li>• Multi-channel deployment support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Brain className="w-10 h-10 text-purple-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">Machine Learning Platform</CardTitle>
                      <CardDescription className="text-slate-300">
                        Custom machine learning model development and AI algorithm optimization services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Data preprocessing and analysis</li>
                        <li>• Model training and optimization</li>
                        <li>• Predictive analytics systems</li>
                        <li>• Automated decision engines</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles className="w-10 h-10 text-green-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">Computer Vision</CardTitle>
                      <CardDescription className="text-slate-300">
                        Image recognition, video analysis, and computer vision application development
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Object detection and recognition</li>
                        <li>• Facial recognition systems</li>
                        <li>• Quality inspection analysis</li>
                        <li>• Real-time video processing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code className="w-10 h-10 text-orange-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">AI Application Development</CardTitle>
                      <CardDescription className="text-slate-300">
                        End-to-end AI application development and system integration services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Full-stack application development</li>
                        <li>• API interface integration</li>
                        <li>• Cloud deployment and operations</li>
                        <li>• Performance monitoring and optimization</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Globe className="w-10 h-10 text-teal-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">Data Intelligence Analytics</CardTitle>
                      <CardDescription className="text-slate-300">
                        Big data processing and intelligent analytics solutions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Data mining and analysis</li>
                        <li>• Business intelligence reports</li>
                        <li>• Trend prediction models</li>
                        <li>• Real-time data monitoring</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Shield className="w-10 h-10 text-violet-400 mb-4" />
                      </motion.div>
                      <CardTitle className="text-white">AI Security Consulting</CardTitle>
                      <CardDescription className="text-slate-300">
                        AI system security assessment and risk management consulting services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-slate-400 space-y-2">
                        <li>• Model security assessment</li>
                        <li>• Data privacy protection</li>
                        <li>• Compliance auditing</li>
                        <li>• Risk control strategies</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Partnering with industry leaders to create revolutionary AI solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Product - Best Humanizer */}
              <motion.div variants={fadeInLeft}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-green-500/50 overflow-hidden group hover:border-green-400/80 transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                        Our Product
                      </Badge>
                    </div>
                    <motion.div
                      className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Sparkles className="w-16 h-16 text-green-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-white">Best Humanizer</CardTitle>
                      <CardDescription className="text-green-300">
                        AI Text Humanization Platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">
                        Transform AI-generated content into undetectable human writing.
                        Bypass AI detection tools like Turnitin, GPTZero. Trusted by 10,000+ users worldwide.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">AI Detection Bypass</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Text Humanization</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Academic Writing</Badge>
                        </motion.div>
                      </div>
                      <motion.a
                        href="https://www.besthumanizer.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                      >
                        Visit Platform
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                    <motion.div
                      className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Bot className="w-16 h-16 text-blue-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-white">Intelligent Customer Service</CardTitle>
                      <CardDescription className="text-slate-300">
                        FinTech Company
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">
                        Developed an intelligent customer service system for a major bank,
                        achieving 24/7 service with 40% improved customer satisfaction and 60% reduced labor costs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">NLP</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Conversational AI</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Sentiment Analysis</Badge>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(147, 51, 234, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
                    <motion.div
                      className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Sparkles className="w-16 h-16 text-purple-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-white">Quality Inspection System</CardTitle>
                      <CardDescription className="text-slate-300">
                        Manufacturing Leader
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">
                        Computer vision-based product quality inspection system with 99.5% accuracy,
                        35% improved production efficiency, and significantly reduced defect rates.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Computer Vision</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Deep Learning</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Automation</Badge>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateY: 10,
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 overflow-hidden group hover:border-green-500/50 transition-all duration-300">
                    <motion.div
                      className="h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotateX: [0, 360, 0]
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Brain className="w-16 h-16 text-green-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-white">Smart Recommendation Engine</CardTitle>
                      <CardDescription className="text-slate-300">
                        E-commerce Giant
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">
                        Personalized recommendation system based on user behavior and preference analysis,
                        45% improved conversion rate and 30% increased user engagement time.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Recommendation</Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge variant="secondary" className="text-xs">Big Data</Badge>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technology Excellence</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Mastering cutting-edge AI technology stack to provide the most advanced solutions for clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h3 className="text-2xl font-bold text-white mb-6">Core Technology Stack</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/80 rounded-lg"
                    whileHover={{ x: 10, backgroundColor: "rgba(51, 65, 85, 0.9)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-slate-300">Deep Learning Frameworks</span>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">PyTorch</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                        <Badge variant="secondary">TensorFlow</Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/80 rounded-lg"
                    whileHover={{ x: 10, backgroundColor: "rgba(51, 65, 85, 0.9)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-slate-300">Large Language Models</span>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">GPT</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                        <Badge variant="secondary">BERT</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">T5</Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/80 rounded-lg"
                    whileHover={{ x: 10, backgroundColor: "rgba(51, 65, 85, 0.9)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-slate-300">Cloud Platforms</span>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">AWS</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                        <Badge variant="secondary">Azure</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">GCP</Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-slate-800/80 rounded-lg"
                    whileHover={{ x: 10, backgroundColor: "rgba(51, 65, 85, 0.9)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-slate-300">Development Technologies</span>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">Python</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                        <Badge variant="secondary">Node.js</Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Badge variant="secondary">React</Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h4
                      className="text-2xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      99.9%
                    </motion.h4>
                    <p className="text-slate-300">System Availability</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h4
                      className="text-2xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      50+
                    </motion.h4>
                    <p className="text-slate-300">Successful Projects</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h4
                      className="text-2xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      5+
                    </motion.h4>
                    <p className="text-slate-300">Expert Team</p>
                  </motion.div>
                  <motion.div
                    className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h4
                      className="text-2xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    >
                      24/7
                    </motion.h4>
                    <p className="text-slate-300">Technical Support</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">Begin Your AI Journey</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Ready to revolutionize your business with AI technology? Let's explore unlimited possibilities together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3">
                    Consult Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="mt-8 text-slate-400"
                whileHover={{ scale: 1.05 }}
              >
                <p>Email: contact@lotook.com | Website: www.lotook.com</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                variants={rotateAnimation}
                animate="animate"
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">Lotook</span>
            </motion.div>
            <motion.p
              className="text-slate-400"
              whileHover={{ color: "#e2e8f0" }}
            >
              © 2024 Lotook. Redefining the future with AI.
            </motion.p>
          </div>

          {/* Company Registration Information */}
          <div className="border-t border-slate-700 pt-6">
            <div className="text-center text-sm text-slate-500">
              <p className="mb-2">
                <span className="font-medium text-slate-400">LOTOOK LTD</span> -
                Registered in England
              </p>
              <p className="text-xs">
                A UK registered company providing cutting-edge AI solutions worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
