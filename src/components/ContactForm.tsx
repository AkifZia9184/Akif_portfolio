
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Let's create something amazing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <Card className="glass-card border-white/10 hover:border-electric-400/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-electric-400 mr-3" />
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-white/5 border-white/20 focus:border-electric-400 transition-all duration-300 ${
                        errors.name ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center text-red-400 text-sm animate-fade-in">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.name}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`bg-white/5 border-white/20 focus:border-electric-400 transition-all duration-300 ${
                        errors.email ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center text-red-400 text-sm animate-fade-in">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`bg-white/5 border-white/20 focus:border-electric-400 h-32 resize-none transition-all duration-300 ${
                        errors.message ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center text-red-400 text-sm animate-fade-in">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.message}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 bg-electric-500/20 rounded-full mr-4 group-hover:bg-electric-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-electric-400" />
                    </div>
                    <span className="text-gray-300">akifzia6@gmail.com</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="p-3 bg-electric-500/20 rounded-full mr-4 group-hover:bg-electric-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-electric-400" />
                    </div>
                    <span className="text-gray-300">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' }
                  ].map(({ icon: Icon, label }) => (
                    <Button 
                      key={label}
                      variant="outline" 
                      size="icon" 
                      className="border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-navy-900 transition-all duration-300 hover:scale-110 hover:rotate-3"
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
