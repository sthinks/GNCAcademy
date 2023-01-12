<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use phpDocumentor\Reflection\PseudoTypes\False_;

class EducationFormMail extends Mailable
{
    use Queueable, SerializesModels;
    public $details;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        if ($this->details['havecnc'] == true) {
            $this->  details['havecnc']  = "var";}
       if( $this->details['havecnc']==false){ $this->  details['havecnc']  ="yok"; };

       if ($this->details['usecnc'] == true) {
        $this->  details['usecnc']  = "evet";}
        if( $this->details['usecnc']==false){ $this->  details['usecnc']  ="hayır"; };


        if ($this->details['isknow_sawdust_machining_information'] == true) {
        $this->  details['isknow_sawdust_machining_information']  = "var";}
        if( $this->details['isknow_sawdust_machining_information']==false){ $this->  details['isknow_sawdust_machining_information']  ="yok"; };
        if ($this->details['kvkk'] == true) {
            $this->  details['kvkk']  = "onaylı";}
        if( $this->details['kvkk']==false){ $this->  details['kvkk']  ="onaysız"; };
        return $this->from('rkapucuoglu@socailthinks.com', 'GNC Akademi')->subject('GNC Akademi Yeni Üye Kaydı')->view('mail.educationform');

    }
}
